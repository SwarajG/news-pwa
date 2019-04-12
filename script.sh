#!/bin/sh
git clone https://github.com/SwarajG/news-pwa.git
cd news-pwa
yarn install
yarn build
google-chrome http://localhost:5000