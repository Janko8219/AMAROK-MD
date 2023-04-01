/* Copyright (C) 2023 Amarok-MD.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Diegoson - Amarok-MD
*/

const { JSDOM } = require("jsdom");
const FormData = require("form-data");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const axios = require("axios");
const qs = require("qs");

module.exports = {
  aiovideodl,
  happymod,
  servermc,
  mediafire,
  telegraph,
  lyric,
  listsurah,
  stickersearch,
  film,
  character,
  manga,
  anime,
  soundcloud,
  xnxxsearch,
  xnxxdl,
  wallpaper,
  wikimedia,
  _token,
};

function _token(host) {
  return new Promise(async (resolve, reject) => {
    axios
      .request({
        url: host,
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        },
      })
      .then(({ data }) => {
        let $ = cheerio.load(data);
        let token = $("#token").attr("value");
        resolve(token);
      });
  });
}

function wallpaper(title, page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`
      )
      .then(({ data }) => {
        let $ = cheerio.load(data);
        let hasil = [];
        $("div.grid-item").each(function (a, b) {
          hasil.push({
            title: $(b).find("div.info > a > h3").text(),
            type: $(b).find("div.info > a:nth-child(2)").text(),
            image: $(b).find("img").attr("src"),
          });
        });
        resolve(hasil);
      });
  });
}

function wikimedia(title) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`
      )
      .then((res) => {
        let $ = cheerio.load(res.data);
        let hasil = [];
        $(".sdms-search-results__list-wrapper > div > a").each(function (a, b) {
          hasil.push({
            title: $(b).find("img").attr("alt"),
            source: $(b).attr("href"),
            image: $(b).find("img").attr("src") || $(b).find("img").attr("src"),
          });
        });
        resolve(hasil);
      });
  });
}

function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = "https://www.xnxx.com";
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {
      method: "get",
    })
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {
          xmlMode: false,
        });
        let title = [];
        let url = [];
        let desc = [];
        let results = [];

        $("div.mozaique").each(function (a, b) {
          $(b)
            .find("div.thumb")
            .each(function (c, d) {
              url.push(
                baseurl + $(d).find("a").attr("href").replace("/THUMBNUM/", "/")
              );
            });
        });
        $("div.mozaique").each(function (a, b) {
          $(b)
            .find("div.thumb-under")
            .each(function (c, d) {
              desc.push($(d).find("p.metadata").text());
              $(d)
                .find("a")
                .each(function (e, f) {
                  title.push($(f).attr("title"));
                });
            });
        });
        for (let i = 0; i < title.length; i++) {
          results.push({
            title: title[i],
            info: desc[i],
            link: url[i],
          });
        }
        resolve({
          code: 200,
          status: true,
          result: results,
        });
      })
      .catch((err) => reject({ code: 503, status: false, result: err }));
  });
}

function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, { method: "get" })
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {
          xmlMode: false,
        });
        const title = $('meta[property="og:title"]').attr("content");
        const duration = $('meta[property="og:duration"]').attr("content");
        const image = $('meta[property="og:image"]').attr("content");
        const videoType = $('meta[property="og:video:type"]').attr("content");
        const videoWidth = $('meta[property="og:video:width"]').attr("content");
        const videoHeight = $('meta[property="og:video:height"]').attr(
          "content"
        );
        const info = $("span.metadata").text();
        const videoScript = $("#video-player-bg > script:nth-child(6)").html();
        const files = {
          low: (videoScript.match("html5player.setVideoUrlLow\\('(.*?)'\\);") ||
            [])[1],
          high: videoScript.match(
            "html5player.setVideoUrlHigh\\('(.*?)'\\);" || []
          )[1],
          HLS: videoScript.match(
            "html5player.setVideoHLS\\('(.*?)'\\);" || []
          )[1],
          thumb: videoScript.match(
            "html5player.setThumbUrl\\('(.*?)'\\);" || []
          )[1],
          thumb69: videoScript.match(
            "html5player.setThumbUrl169\\('(.*?)'\\);" || []
          )[1],
          thumbSlide: videoScript.match(
            "html5player.setThumbSlide\\('(.*?)'\\);" || []
          )[1],
          thumbSlideBig: videoScript.match(
            "html5player.setThumbSlideBig\\('(.*?)'\\);" || []
          )[1],
        };
        resolve({
          status: 200,
          result: {
            title,
            URL,
            duration,
            image,
            videoType,
            videoWidth,
            videoHeight,
            info,
            files,
          },
        });
      })
      .catch((err) => reject({ code: 503, status: false, result: err }));
  });
}

async function soundcloud(url) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://aiovideodl.ml/",
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        cookie:
          "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;",
      },
    }).then((data) => {
      let a = cheerio.load(data.data);
      let token = a("#token").attr("value");
      const options = {
        method: "POST",
        url: `https://aiovideodl.ml/wp-json/aio-dl/video-data/`,
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;",
        },
        formData: { url: url, token: token },
      };
      request(options, async function (error, response, body) {
        if (error) throw new Error(error);
        res = JSON.parse(body);
        res.status = 200;
        res.author = author;
        resolve(res);
      });
    });
  });
}

function anime(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.anime-planet.com/anime/all?name=${query}`)
      .then(({ data }) => {
        const hasil = [];
        const $ = cheerio.load(data);
        $("#siteContainer > ul.cardDeck.cardGrid > li ").each(function (a, b) {
          result = {
            status: 200,
            author: "Amarok",
            judul: $(b).find("> a > h3").text(),
            link:
              "https://www.anime-planet.com" + $(b).find("> a").attr("href"),
            thumbnail:
              "https://www.anime-planet.com" +
              $(b).find("> a > div.crop > img").attr("src"),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function manga(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.anime-planet.com/manga/all?name=${query}`)
      .then(({ data }) => {
        const hasil = [];
        const $ = cheerio.load(data);
        $("#siteContainer > ul.cardDeck.cardGrid > li ").each(function (a, b) {
          result = {
            status: 200,
            author: "Amarok",
            judul: $(b).find("> a > h3").text(),
            link:
              "https://www.anime-planet.com" + $(b).find("> a").attr("href"),
            thumbnail:
              "https://www.anime-planet.com" +
              $(b).find("> a > div.crop > img").attr("src"),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function character(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.anime-planet.com/characters/all?name=${query}`)
      .then(({ data }) => {
        const hasil = [];
        const $ = cheerio.load(data);
        $("#siteContainer > table > tbody > tr").each(function (a, b) {
          result = {
            status: 200,
            author: "Amarok",
            character: $(b).find("> td.tableCharInfo > a").text(),
            link:
              "https://www.anime-planet.com" +
              $(b).find("> td.tableCharInfo > a").attr("href"),
            thumbnail: $(b)
              .find("> td.tableAvatar > a > img")
              .attr("src")
              .startsWith("https://")
              ? $(b).find("> td.tableAvatar > a > img").attr("src")
              : "https://www.anime.planet.com" +
                $(b).find("> td.tableAvatar > a > img").attr("src"),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function film(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://167.99.31.48/?s=${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $("#content > div > div.los").each(function (a, b) {
          $(b)
            .find("article")
            .each(function (c, d) {
              const judul = $(d)
                .find("div > a > div.addinfox > header > h2")
                .text();
              const quality = $(d).find("div > a > div > div > span").text();
              const type = $(d)
                .find("div > a > div.addinfox > div > i.type")
                .text();
              const upload = $(d)
                .find("div > a > div.addinfox > div > span")
                .text();
              const link = $(d).find("div > a").attr("href");
              const thumb = $(d).find("div > a > div > img").attr("src");
              const result = {
                status: 200,
                author: "Amarok",
                judul: judul,
                quality: quality,
                type: type,
                upload: upload,
                link: link,
                thumb: thumb,
              };
              hasil.push(result);
            });
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function mangatoons(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://mangatoon.mobi/en/search?word=${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $(
          "#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div > div "
        ).each(function (a, b) {
          result = {
            status: 200,
            author: "Amarok",
            judul: $(b).find("> div.recommend-comics-title > span").text(),
            genre: $(b).find("> div.comics-type > span").text().trim(),
            link: "https://mangatoon.mobi" + $(b).find("> a").attr("href"),
            thumbnail: $(b).find("> a > div > img").attr("src"),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function stickersearch(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://getstickerpack.com/stickers?query=${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const source = [];
        const link = [];
        $("#stickerPacks > div > div:nth-child(3) > div > a").each(function (
          a,
          b
        ) {
          source.push($(b).attr("href"));
        });
        axios
          .get(source[Math.floor(Math.random() * source.length)])
          .then(({ data }) => {
            const $$ = cheerio.load(data);
            $$("#stickerPack > div > div.row > div > img").each(function (
              c,
              d
            ) {
              link.push(
                $$(d)
                  .attr("src")
                  .replace(/&d=200x200/g, "")
              );
            });
            result = {
              status: 200,
              author: "Amarok",
              title: $$("#intro > div > div > h1").text(),
              sticker_url: link,
            };
            resolve(result);
          });
      })
      .catch(reject);
  });
}

function listsurah() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://litequran.net/")
      .then(({ data }) => {
        const $ = cheerio.load(data);
        let listsurah = [];
        $("body > main > section > ol > li > a").each(function (a, b) {
          listsurah.push($(b).text());
        });
        result = {
          status: 200,
          author: "Amarok",
          listsurah: listsurah,
        };
        resolve(result);
      })
      .catch(reject);
  });
}

function surah(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://litequran.net/${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $("body > main > article > ol > li").each(function (a, b) {
          result = {
            status: 200,
            author: "Amarok",
            arab: $(b).find("> span.ayat").text(),
            latin: $(b).find("> span.bacaan").text(),
            translate: $(b).find("> span.arti").text(),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function lyric(judul) {
  return new Promise(async (resolve, reject) => {
    axios
      .get("https://www.musixmatch.com/search/" + judul)
      .then(async ({ data }) => {
        const $ = cheerio.load(data);
        const hasil = {};
        let limk = "https://www.musixmatch.com";
        const link =
          limk + $("div.media-card-body > div > h2").find("a").attr("href");
        await axios.get(link).then(({ data }) => {
          const $$ = cheerio.load(data);
          hasil.thumb =
            "https:" +
            $$(
              "div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div"
            )
              .find("img")
              .attr("src");
          $$("div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics").each(
            function (a, b) {
              hasil.lyric =
                $$(b).find("span > p > span").text() +
                "\n" +
                $$(b).find("span > div > p > span").text();
            }
          );
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

async function telegraph(buffer) {
  return new Promise(async (resolve, reject) => {
    const { ext } = await fromBuffer(buffer);
    let form = new FormData();
    form.append("file", buffer, "tmp." + ext);
    let res = await fetch("https://telegra.ph/upload", {
      method: "POST",
      body: form,
    });
    let img = await res.json();
    if (img.error) throw img.error;
    hasil = "https://telegra.ph" + img[0].src;
    resolve({ hasil });
    console.log(hasil);
  }).catch(reject);
}

function servermc() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://minecraftpocket-servers.com/country/india/`)
      .then((tod) => {
        const $ = cheerio.load(tod.data);
        hasil = [];
        $("tr").each(function (c, d) {
          ip = $(d)
            .find("button.btn.btn-secondary.btn-sm")
            .eq(1)
            .text()
            .trim()
            .replace(":19132", "");
          port = "19132";
          versi = $(d).find("a.btn.btn-info.btn-sm").text();
          player = $(d)
            .find("td.d-none.d-md-table-cell > strong")
            .eq(1)
            .text()
            .trim();
          const Data = {
            ip: ip,
            port: port,
            versi: versi,
            player: player,
          };
          hasil.push(Data);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function happymod(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.happymod.com/search.html?q=${query}`)
      .then(async (tod) => {
        const $ = cheerio.load(tod.data);
        hasil = [];
        $("div.pdt-app-box").each(function (c, d) {
          name = $(d).find("a").text().trim();
          icon = $(d).find("img.lazy").attr("data-original");
          link = $(d).find("a").attr("href");
          link2 = `https://www.happymod.com${link}`;
          const Data = {
            icon: icon,
            name: name,
            link: link2,
          };
          hasil.push(Data);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function aiovideodl(link) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://aiovideodl.ml/",
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        cookie:
          "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653",
      },
    }).then((src) => {
      let a = cheerio.load(src.data);
      let token = a("#token").attr("value");
      axios({
        url: "https://aiovideodl.ml/wp-json/aio-dl/video-data/",
        method: "POST",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653",
        },
        data: new URLSearchParams(Object.entries({ url: link, token: token })),
      }).then(({ data }) => {
        resolve({ status: src.status, creator: "Xasena", hasil: data });
      });
    });
  });
}

async function mediafire(url) {
  let query = await axios.get(url);
  let cher = cheerio.load(query.data);
  let hasil = [];
  let link = cher("a#downloadButton").attr("href");
  let size = cher("a#downloadButton")
    .text()
    .replace("Download", "")
    .replace("(", "")
    .replace(")", "")
    .replace("\n", "")
    .replace("\n", "")
    .replace(" ", "");
  let seplit = link.split("/");
  let author = "Amarok";
  let nama = seplit[5];
  let mime = nama.split(".");
  mime = mime[1];
  hasil.push({ author, nama, mime, size, link });
  return hasil;
}
async function syncgit() {	
const simpleGit = require('simple-git')	
    const git = simpleGit();	
        await git.fetch();	
            var commits = await git.log(['main' + '..origin/' + 'main']);	
	    return commits	

}	
async function sync() {	
      const simpleGit = require('simple-git')	
    const git = simpleGit();	
        await git.fetch();	
            var commits = await git.log(['main' + '..origin/' + 'main']);	
	     const { prefix } = require('../config');	
            var availupdate = '*𝐔𝐩𝐝𝐚𝐭𝐞 𝐀𝐚𝐢𝐥𝐚𝐛𝐥𝐞* \n\n';	
            commits['all'].map(	
            (commit) => { 	
            availupdate += '● [' + commit.date.substring(0, 10) + ']: '+ commit.message +'\n- By:'+commit.author_name+'\n'});	
            return availupdate
}
async function checkcard(id) {	
	let cdata = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)	
	return cdata.data.data[0]	

}	
async function claim(id,user) {	
	let cdata = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)	
	let data = cdata.data.data[0]	
	const { card } = require('.')	
	await new card({	
             user: user,	
             id: data.id,	
             name: data.name,	
             desc: data.desc,	
             atk: data.atk,	
             def: data.def,	
             race: data.race,	
             image: data.card_images[0].image_url,	
             price: data.card_prices[0].amazon_price*1000,	
                   }).save()	
	return cdata.data.data[0]	

}	
async function collection(h) {	
	const { card } = require('.')	
	let getGroups = await card.find().where('user').in(h)	
         return getGroups	
}	
const Config = require('../config');	
if (fs.existsSync('./Themes/' + Config.LANG + '.json')) {	
	//log(pint('Loading ' + Config.LANG + ' language...', '.'));	
	var json = JSON.parse(fs.readFileSync('./Themes/' + Config.LANG + '.json'));	
} else {	
	var json = JSON.parse(fs.readFileSync('./Themes/AMAROK.json'));	
}	
function ffancy(teks) {	
    return new Promise((resolve, reject) => {	
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)	
        .then(({ data }) => {	
            let $ = cheerio.load(data)	
            let hasil = []	
            $('table > tbody > tr').each(function (a, b) {	
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })	
            })	
            resolve(hasil)	
        })	
    })	
}	
async function fancy(teks,num){	
   try{	
     let huhh = await ffancy(teks)	
	 return huhh[num].result	
   } catch (e)	
   {	
     console.log(e)	
   }	
}	
async function randomfancy(teks,num){	
   try{	
     let huhh = await ffancy(teks)	
	 return huhh[num].result	
   } catch (e)	
   {	
     console.log(e)	
   }	
}	
function getString(file) {	
	return json['STRINGS'][file];	
}	
function tlang() {	
  let LangG = getString("global");	
      return LangG	
    }	
 function botpic() {	
 return new Promise( (resolve, reject) => {	
   let LangG = getString("global");	
   let todlink = [`${LangG.pic1}`,`${LangG.pic2}`,`${LangG.pic3}`,`${LangG.pic4}`,`${LangG.pic5}`,`${LangG.pic6}`	
  ];	
const picamarokh = todlink[Math.floor(Math.random() * todlink.length)];	
resolve(picamarokh)	
})	
 }
