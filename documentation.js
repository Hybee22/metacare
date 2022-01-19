const docs = [
  {
    movies: {
      list: {
        description:
          "This endpoint returns a list of movies, along with their names, opening crawls and comments count",
        method: "GET",
        request: "https://metacare-test.herokuapp.com/v1/movies/list",
        response: {
          status: "success",
          message: "All movies fetched successfully",
          data: {
            data: [
              {
                title: "A New Hope",
                episode_id: 4,
                opening_crawl:
                  "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                release_date: "1977-05-25",
                comments: {
                  count: 0,
                  rows: [],
                },
              },
            ],
          },
        },
      },
      listById: {
        description:
          "This endpoint returns a info about a single movie, along with its name, opening crawl and comments count",
        method: "GET",
        request: "https://metacare-test.herokuapp.com/v1/movies/list/4",
        response: {
          status: "success",
          message: "Movie details fetched successfully",
          data: {
            data: {
              title: "The Phantom Menace",
              episode_id: 1,
              opening_crawl:
                "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
              release_date: "1999-05-19",
              comments: 3,
            },
          },
        },
      },
    },
    comments: {
      addComment: {
        description:
          "This endpoint allow comments to be added anonymously for any of the listed movies. Character limit is capped at 500 characters.",
        method: "POST",
        request: "https://metacare-test.herokuapp.com/v1/comments/create",
        body: {
          movieId: 4,
          body: "A beautiful movie. I love it!",
        },
        response: {
          status: "success",
          message: "Comment added successfully",
          data: {
            data: {
              id: 3,
              movieId: 4,
              commentId: "b23d1692-6614-4cfe-8624-79b30ebea0d9",
              body: "A beautiful movie. I love it!",
              anonymous: true,
            },
          },
        },
      },
      getComments: {
        description:
          "This endpoint allows you fetch all comments for a single movie",
        method: "GET",
        request: "https://metacare-test.herokuapp.com/v1/comments/list?id=1",
        response: {
          status: "success",
          message: "Comments fetched successfully",
          data: {
            data: {
              count: 2,
              rows: [
                {
                  id: 2,
                  movieId: 1,
                  body: "Beautiful as always",
                  commentId: "2100405c-42d0-4e41-bddd-d07b6e500f24",
                  anonymous: true,
                  ipAddress: "102.89.0.69",
                  createdAt: "2022-01-19T08:02:59.160Z",
                },
                {
                  id: 1,
                  movieId: 1,
                  body: "Wow! One of the best episode so far",
                  commentId: "e300aa14-7b69-47ef-8272-876939c5837e",
                  anonymous: true,
                  ipAddress: "102.89.0.69",
                  createdAt: "2022-01-19T08:02:39.073Z",
                },
              ],
            },
          },
        },
      },
      getCommentsByTitle: {
        description:
          "This endpoint allows you fetch all comments for a single movie by passing the movie title as a query",
        method: "GET",
        request:
          "https://metacare-test.herokuapp.com/v1/comments/?title=the phantom menace",
        response: {
          status: "success",
          message: "Comments for title fetched successfully",
          data: {
            data: [
              {
                id: 3,
                movieId: 1,
                commentId: "438bd44b-a09a-4a43-9df0-6cfe78e2e0da",
                body: "Wow! One of the best episode so far",
                anonymous: true,
                createdAt: "2022-01-18T00:24:01.479Z",
              },
              {
                id: 2,
                movieId: 1,
                commentId: "01e8ad46-d1e7-49c5-a5b7-75706b3f5a80",
                body: "An epic movie. Can't wait for the next installation",
                anonymous: true,
                createdAt: "2022-01-18T00:23:42.653Z",
              },
              {
                id: 1,
                movieId: 1,
                commentId: "dee40a1d-59ed-4416-848b-d4ac42f3ece7",
                body: "A beautiful movie. I love it!",
                anonymous: true,
                createdAt: "2022-01-18T00:23:12.548Z",
              },
            ],
          },
        },
      },
    },
    characters: {
      list: {
        description:
          "This endpoint returns a info about some characters in the Star Wars franchise",
        additionalInfo:
          "The sorting options include name, height and gender. The filter option is by gender, male, female, n/a",
        method: "GET",
        request:
          "https://metacare-test.herokuapp.com/v1/characters/list?sort=name&filter=female",
        response: {
          status: "success",
          message: "All movies characters fetched successfully",
          data: {
            metadata: {
              numberOfCharacters: 5,
              totalHeight: {
                cm: 183,
                "feet/inches": "6ft and 0.05 inches",
              },
            },
            data: [
              {
                name: "Biggs Darklighter",
                height: "183",
                mass: "84",
                hair_color: "black",
                skin_color: "light",
                eye_color: "brown",
                birth_year: "24BBY",
                gender: "male",
                homeworld: "https://swapi.py4e.com/api/planets/1/",
                films: ["https://swapi.py4e.com/api/films/1/"],
                species: ["https://swapi.py4e.com/api/species/1/"],
                vehicles: [],
                starships: ["https://swapi.py4e.com/api/starships/12/"],
                created: "2014-12-10T15:59:50.509000Z",
                edited: "2014-12-20T21:17:50.323000Z",
                url: "https://swapi.py4e.com/api/people/9/",
              },
            ],
          },
        },
      },
    },
  },
];

export default docs;
