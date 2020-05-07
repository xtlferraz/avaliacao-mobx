import React, { Component } from 'react';
import './App.css';
import Store from './Store';
import {decorate, observable, action, computed} from 'mobx';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';


decorate(Store, {
  reviewList: observable,
  addReview: action,
  averageScore: computed,
  reviewCount: computed
});

const reviewStore = new Store();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Form store={reviewStore}/>
        <Dashboard store={reviewStore}/>
        <Reviews store={reviewStore}/>
      </div>
    );
  }
}

export default App;