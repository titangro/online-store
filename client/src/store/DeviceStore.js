import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Холодильники',
      },
      {
        id: 2,
        name: 'Смартфоны',
      },
    ];
    this._brands = [
      {
        id: 1,
        name: 'Samsung',
      },
      {
        id: 2,
        name: 'Apple',
      },
    ];
    this._devices = [
      {
        id: 1,
        name: '12 pro',
        price: 100000,
        rating: 0,
        img: 'http://localhost:5000/7479fe80-70ca-41c2-b095-b993a5ec565b.jpg',
      },
      {
        id: 2,
        name: 'a51',
        price: 90000,
        rating: 0,
        img: 'http://localhost:5000/8caa258a-0435-4389-b72b-8aadea321cc9.jpg',
      },
      {
        id: 3,
        name: 'a515',
        price: 90001,
        rating: 0,
        img: 'http://localhost:5000/90fe105c-2dac-4c75-a7c3-d4b786ca2a3a.jpg',
      },
      {
        id: 4,
        name: 'note pro',
        price: 90001,
        rating: 0,
        img: 'http://localhost:5000/245f5892-923f-4d2a-b7d2-c99b4814dd34.jpg',
      },
      {
        id: 5,
        name: 'Atlant',
        price: 90002,
        rating: 0,
        img: 'http://localhost:5000/6d3b6940-c610-4428-b3eb-6d3239627457.jpg',
      },
    ];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
