Vue.component("post-card", {
  template: `<div class= "max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-6">
    <img class="w-full" :src="url" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-grey-darker text-base">
          {{ body }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2" v-for="tag in tags">#{{ tag }}</span>
      </div>
        </div>`,
  props: {
    title: String,
    body: String,
    url: String,
    tags: Array
  }
});

var app = new Vue({
  el: "#app",
  data: {
    participant: "Philipp",
    name: "",
    email: "",
    text: "",
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          "prvauri optio reprehenderit",
        body:
          "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        url: "https://picsum.photos/600/400/?image=296",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
          "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        url: "https://picsum.photos/600/400/?image=585",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
          "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        url: "https://picsum.photos/600/400/?image=186",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body:
          "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        url: "https://picsum.photos/600/400/?image=758",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body:
          "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
        url: "https://picsum.photos/600/400/?image=559",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body:
          "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
        url: "https://picsum.photos/600/400/?image=702",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 7,
        title: "magnam facilis autem",
        body:
          "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
        url: "https://picsum.photos/600/400/?image=477",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        body:
          "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
        url: "https://picsum.photos/600/400/?image=225",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body:
          "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
        url: "https://picsum.photos/600/400/?image=1061",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body:
          "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
        url: "https://picsum.photos/600/400/?image=585",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body:
          "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi",
        url: "https://picsum.photos/600/400/?image=515",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body:
          "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio",
        url: "https://picsum.photos/600/400/?image=538",
        tags: ["travel", "nature", "outdoor"]
      }
    ]
  },
  methods: {
    alert() {
      console.log("clicked");
      alert("Button geklickt");
    }
  }
});
