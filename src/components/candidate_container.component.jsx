import React, { Component } from 'react';
import { Candidate } from './candidate.component';
import lukashenko from '../static/lukashenko.png'; 
import gancevich from '../static/gancevich.png';
import nepomnyaschih from '../static/nepomnyaschih.png';
import kisel from '../static/kisel.png';
import babariko from '../static/babariko.png';
import cepkalo from '../static/cepkalo.png';

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
        <Candidate src={cepkalo} name="Валерий Цепкало" decription="Инициатор и создатель Белорусского Парка высоких технологий."/>
      </div>
    )
  }
}