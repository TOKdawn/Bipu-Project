module.exports = [{
    path: '/index',
    name: 'index',
    component: require('pages/index/index')
  }, {
    path: '',
    redirect: '/index'
  }, {
    path: '/login',
    name: 'login',
    component: require('pages/login/login')
  }, {
    path: '/forget',
    name: 'forget',
    component: require('pages/login/forget')
  }, {
    path: '/tassadar',
    component: require('pages/admin/index')
  }, {
    path: '/403',
    name: '403',
    component: require('pages/system/403')
  }, {
    path: '/page',
    name: 'page',
    component: require('pages/page'),
    children: [{
      path: 'download',
      name: 'download',
      component: require('pages/download/download')
    }, {
      path: 'about',
      name: 'about',
      component: require('pages/about/about')
    }, {
      path: 'volumelist',
      name: 'volumelist',
      component: require('pages/volumelist/volumeList')
    }, {
      path: 'translator',
      name: 'translator',
      component: require('pages/translator/translator')
    }, {
      path: 'searchres/:searchtext',
      name: 'searchres',
      component: require('pages/searchres/searchres')
    }, {
      path: 'score/:sid',
      name: 'score',
      component: require('pages/score/score')
    }, {
      path: 'editscore/:sid',
      name: 'editscore',
      component: require('pages/score/editscore')
    }, {
      path: 'upload',
      name: 'upload',
      component: require('pages/upload/upload'),
      meta: {
        adminAuth: true
      }
    }, {
      path: 'article/:Atitle',
      name: 'article',
      component: require('pages/article/article')
    }, {
      path: 'articleList',
      name: 'articleList',
      component: require('pages/article/articleList')
    }, {
      path: 'volume/:vid',
      name: 'volume',
      component: require('pages/volume/volume')
    }, {
      path: 'editVolume/:vid',
      name: 'editVolume',
      component: require('pages/volume/volumeEdit')
  
    }, {
      path: 'user/:uid',
      name: 'user',
      component: require('pages/user/user'),
      meta: {
        requireAuth: true
      }
    }, {
      path: 'uploadimg/:uid',
      name: 'uploadimg',
      component: require('pages/user/uploadimg'),
      meta: {
        requireAuth: true
      }
    }, {
      path: 'editInfo/:uid',
      name: 'editInfo',
      component: require('pages/user/editInfo'),
      meta: {
        requireAuth: true
      }
    }]
  }]
  