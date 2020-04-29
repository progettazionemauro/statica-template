const NYTBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch";
const ApiKey = "Z2WEDMiwO1hxuj5Mwbjc4zMjybe8iNUl";

function buildUrl (url) {
  return NYTBaseUrl + ".json?api-key=" + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted () {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  }
});