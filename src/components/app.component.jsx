import React, { Component } from 'react';
import { CandidateContainer } from './candidate_container.component';
import { loadCandidates } from '../containers/app.container';
import { updateSelectedCondidates } from '../common/point-storage'

import '../styles/App.css';
import { PicketMap } from './picket_map.component';
import { Footer } from './footer.component';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      selectedCandidates: [],
      error: ''
    };
  }

  componentDidMount() {
    loadCandidates()
      .then((r) => {
        this.setState({ candidates: r });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  componentDidUpdate () {
    updateSelectedCondidates(this.state.selectedCandidates);
    return true;
  }

  selectCandidate = (id) => {
    if (this.state.selectedCandidates.indexOf(id) > -1) {
      this.setState({
        selectedCandidates: this.state.selectedCandidates.filter(
          (sc) => sc !== id
        ),
      });
    } else {
      this.setState({
        selectedCandidates: this.state.selectedCandidates.concat(id),
      });
    }
  };

  render() {
    if (this.state.error) {
      return (
        <div className="Error">
          К сожалению сайт в данный момент не работает
        </div>
      );
    }
    return (
      <div className="App">
        <div className="Header">
          <h1>ИНФОРМАЦИЯ О ПИКЕТАХ</h1>
          <div className="HeaderInfo">
            информация взята из открытых источников. Чтобы показать информацию о пикетах только
            одного или нескольких кандидатов - нажмите на их
            фотографию. Для связи пишите на почту внизу страницы
          </div>
        </div>
        <CandidateContainer
          candidates={this.state.candidates}
          selectedCandidates={this.state.selectedCandidates}
          selectCandidate={this.selectCandidate}
        />
        <PicketMap
          candidates={this.state.candidates}
          selectedCandidates={this.state.selectedCandidates}
          visible={this.state.visible}
        />
        <Footer />
      </div>
    );
  }
}
