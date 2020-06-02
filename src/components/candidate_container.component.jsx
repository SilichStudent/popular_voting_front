import React, { Component } from 'react';
import { Candidate } from './candidate.component';
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

import '../styles/CandidatesContainer.css'

export class CandidateContainer extends Component {

  render () {
    return (
      <div className="CandidatesContainer">
        <Candidate src={lukashenko} name="Александр Лукашенко" decription="Президент Республики Беларусь (с 1994 года)"/>
        <Candidate src={gancevich} name="Юрий Ганцевич" decription="Фермер-блогер"/>
        <Candidate src={nepomnyaschih} name="Владимир Непомнящих" decription="Пенсионер"/>
        <Candidate src={kisel} name="Наталья Кисель" decription="Индивидуальный предприниматель"/>
        <Candidate src={babariko} name="Виктор Бабарико" decription="Бывший председатель Правления ОАО «Белгазпромбанк»"/>
        <Candidate src={cepkalo} name="Валерий Цепкало" decription="Инициатор и создатель Белорусского Парка высоких технологий"/>
        <Candidate src={cherechen} name="Сергей Черечень" decription="Председатель партии Белорусская социал-демократическая Грамада"/>
        <Candidate src={kovalkova} name="Ольга Ковалькова" decription="Сопредседатель оргкомитета по созданию партии «Белорусская христианская демократия»"/>
        <Candidate src={kanopatckaya} name="Анна Канопацкая" decription="Депутат Палаты представителей VI созыва (2016—2019)"/>
        <Candidate src={dmitriev} name="Андрей Дмитриев" decription="Сопредседатель общественного объединения «Говори правду»"/>
        <Candidate src={tihanovskaya} name="Светлана Тихановская" decription='Переводчик. Супруга Сергея Тихановского - автора канала "Страна для жизни", которому ЦИК отказал в регистрации инициативной группы по выдвижению в кандидаты на президентский пост'/>
        <Candidate src={tabolich} name="Александр Таболич" decription='Музыкант, лидер группы Znich'/>
        <Candidate src={gubarevich} name="Юрий Губаревич" decription='Глава движения «За Свободу»'/>
        <Candidate src={kozlov} name="Николай Козлов" decription='Исполняющий обязанности председателя Объединенной гражданской партии'/>
      </div>
    )
  }
}