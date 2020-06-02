import lukashenko from '../static/lukashenko.png';
import gancevich from '../static/gancevich.png';
import nepomnyaschih from '../static/nepomnyaschih.png';
import kisel from '../static/kisel.png';
import babariko from '../static/babariko.png';
import cepkalo from '../static/cepkalo.png';
import cherechen from '../static/cherechen.png';
import kovalkova from '../static/kovalkova.png';
import kanopatckaya from '../static/kanopatckaya.png';
import dmitriev from '../static/dmitriev.png';
import tihanovskaya from '../static/tihanovskaya.png';
import tabolich from '../static/tabolich.png';
import gubarevich from '../static/gubarevich.png';
import kozlov from '../static/kozlov.png';

const idPhotoMap = {
  1: lukashenko,
  2: gancevich,
  3: nepomnyaschih,
  4: kisel,
  5: babariko,
  6: cepkalo,
  7: cherechen,
  8: kovalkova,
  9: kanopatckaya,
  10: dmitriev,
  11: tihanovskaya,
  12: tabolich,
  13: gubarevich,
  14: kozlov,
};

export const getPhotoByUser = (user) => {
  return idPhotoMap[user.id];
}