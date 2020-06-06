const candidatesObjects = {};
let map = null;

export const initCandidatesObjects = (candidates) => {
  window.ymaps.ready(async () => {
    candidates.forEach((candidate) => {
      const plsmks = candidate.coordinates.map((c) => {
        const cord = c.value
          .split(',')
          .map((co) => co.trim())
          .map((co) => parseFloat(co));
        return new window.ymaps.Placemark(
          cord,
          {
            balloonContent: `<strong>${candidate.nameSurname}</strong>, ${c.description}`,
            iconCaption: `${candidate.nameSurname}`,
          },
          {
            preset: 'islands#icon',
            iconColor: candidate.color,
            visible: false,
          }
        );
      });
      candidatesObjects[candidate.id] = plsmks;
    });

    while (!document.getElementById('map')) {
      await new Promise(r => setTimeout(r, 200));
    }

    map = new window.ymaps.Map(
      'map',
      {
        center: [53.9, 27.55],
        zoom: 6,
      },
      {
        searchControlProvider: 'yandex#search',
      }
    );

    Object.values(candidatesObjects).forEach((plasemarks) => {
      plasemarks.forEach((pl) => {
        map.geoObjects.add(pl);
      });
    });
  });
};

export const updateSelectedCondidates = (selectedCandidates) => {
  console.log(candidatesObjects);
  
  Object.entries(candidatesObjects).forEach(([key, vals]) => {
    if (selectedCandidates.indexOf(parseInt(key)) > -1) {
      vals.forEach((val) => {
        val.options.set('visible', true);
      });
    } else {
      vals.forEach((val) => {
        val.options.set('visible', false);
      });
    }
  });
}
