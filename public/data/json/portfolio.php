<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=utf-8");

    $json = '[
      {
        "id": 1,
        "name": "SEB BANK",
        "type": "TV app",
        "desc": "UX/UI<i></i>Front-end",
        "year": 2019,
        "url": "https://github.com/miloszekovic/frontend-for-tv-screens-example",
        "urlName": "SEB TV project on GitHub",
        "img": "https://mze.ninja/data/img/seb-tv.jpg"
      },
      {
        "id": 2,
        "name": "Atos Vrata",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end<i></i>WordPress",
        "year": 2018,
        "url": "https://www.atos-vrata.rs/",
        "urlName": "Atos-vrata.rs",
        "img": "https://mze.ninja/data/img/atos-vrata.jpg"
      },
      {
        "id": 3,
        "name": "Evitbe",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end<i></i>WordPress",
        "year": 2018,
        "url": "https://www.evitbe.com/",
        "urlName": "Evitbe.com",
        "img": "https://mze.ninja/data/img/evitbe.jpg"
      },
      {
        "id": 4,
        "name": "VPBG",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end<i></i>WordPress",
        "year": 2017,
        "url": "https://www.vpbg.rs/",
        "urlName": "Vpbg.rs",
        "img": "https://mze.ninja/data/img/vpbg.jpg"
      },
      {
        "id": 5,
        "name": "Moldova bridge",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end<i></i>WordPress",
        "year": 2017,
        "url": "https://www.moldovabridge.com/",
        "urlName": "Moldovabridge.com",
        "img": "https://mze.ninja/data/img/moldovabridge.jpg"
      },
      {
        "id": 6,
        "name": "Pausal",
        "type": "app",
        "desc": "UI development",
        "year": 2016,
        "url": "https://moj.pausal.rs/#/login/",
        "urlName": "moj.Pausal.rs",
        "img": "https://mze.ninja/data/img/pausal.jpg"
      },
      {
        "id": 7,
        "name": "BeYou",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end<i></i>WordPress",
        "year": 2016,
        "url": "https://www.beyoubefree.rs/",
        "urlName": "Beyoubefree.rs",
        "img": "https://mze.ninja/data/img/be-you.jpg"
      },
      {
        "id": 8,
        "name": "Zla Zla Shop",
        "type": "e-commerce",
        "desc": "Front-end / UI",
        "year": 2016,
        "url": "https://www.zla-zla.com/zlashtek/",
        "urlName": "Zla-zla.com",
        "img": "https://mze.ninja/data/img/zla-zla.jpg"
      },
      {
        "id": 9,
        "name": "Municipality Stara Pazova",
        "type": "official site",
        "desc": "UX/UI<i></i>Front-end<i></i>Drupal",
        "year": 2015,
        "url": "https://www.starapazova.rs/",
        "urlName": "Starapazova.rs",
        "img": "https://mze.ninja/data/img/stara-pazova.jpg"
      },
      {
        "id": 10,
        "name": "Olivebox",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end",
        "year": 2012,
        "url": "https://www.olivebox.net/",
        "urlName": "Olivebox.net",
        "img": "https://mze.ninja/data/img/olive-box-web.jpg"
      },
      {
        "id": 11,
        "name": "Olivebox",
        "type": "app",
        "desc": "UX/UI<i></i>Front-end",
        "year": 2013,
        "url": "https://www.olivebox.net/pricing-signup/",
        "urlName": "Olivebox.net",
        "img": "https://mze.ninja/data/img/olive-box-app.jpg"
      },
      {
        "id": 12,
        "name": "Saint Serbia Org.",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end<i></i>Drupal",
        "year": 2014,
        "url": "https://www.svetasrbija.org.rs/",
        "urlName": "Svetasrbija.org.rs",
        "img": "https://mze.ninja/data/img/sveta-srbija.jpg"
      },
      {
        "id": 13,
        "name": "Zonaii Italia",
        "type": "site",
        "desc": "UX/UI<i></i>Front-end",
        "year": 2010,
        "url": "https://www.zonaii.com/",
        "urlName": "Zonaii.com",
        "img": "https://mze.ninja/data/img/zonaii.jpg"
      },
      {
        "id": 14,
        "name": "Madness",
        "type": "e-commerce",
        "desc": "UX/UI<i></i>Front-end",
        "year": 2009,
        "url": "https://mze.ninja/sites/madness.rs/",
        "urlName": "Madness.rs",
        "img": "https://mze.ninja/data/img/madness.jpg"
      },
      {
        "id": 15,
        "name": "Vojacka Zvona",
        "type": "web monograph",
        "desc": "UX/UI<i></i>Front-end",
        "year": 2008,
        "url": "https://mze.ninja/sites/vojackazvona.rs/",
        "urlName": "Vojackazvona.rs",
        "img": "https://mze.ninja/data/img/zvona.jpg"
      }
    ]';
    echo $json;
?>
