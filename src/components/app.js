import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import NasaPhoto from './NasaPhoto'
import NavBar from './NavBar'

const api = axios.create({
  baseURL: `https://men-api.herokuapp.com/posts`
})

export default class App extends Component {

  state = {
    posts: [],
    nasaImages: []
  }

  constructor() {
    super();
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const data = await api.get('/', {
      }).then(({data}) => 
      data);
      this.setState({posts: data})
    } catch (error) {
      console.log(error);
    }
  }

  createPost = async () => {
    try {
      const res = await api.post('/', {title: "Test", _id: "2", autor: 'test', imageUrl: 'https://images.unsplash.com/photo-1538099130811-745e64318258?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'})
      console.log(res)
      this.getPosts();
    } catch (error) {
      console.log(error);
    }
  }

  deletePost = async (_id) => {
    try {
      const data = await api.delete(`/${_id}`)
      this.getPosts();
    } catch (error) {
      console.log(error)
    }
  }

  updatePost = async (_id, val) => {
    try {
      const data = await api.patch(`/${_id}`, { title: val })
      this.getPosts();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <NasaPhoto />
        </BrowserRouter>
      </div>
    );
  }
}