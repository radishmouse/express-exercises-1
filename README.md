
# Wash-Rinse-Repeat

To solidify the foundations of using Express, work through the [routing-template-madlibs](https://github.com/radishmouse/routing-templating-madlibs/tree/bonus2-solution) exercises, but using the `express` module instead of the built-in `http` module.

As before, create a new project for each application.

# Album browser

Continuing the code from [the demo](https://github.com/radishmouse/hello-express), create a module named `albums.js` that provides the following functions:

- `getAlbums`
- `getSongsForAlbum`

In `albums.js`, `require()` an `albumsData.json` file that you will need to create and fill with this data:


```json
{
  "albums": [
    {
        "id": 1001,
        "artist": "Miles Davis",
        "title": "Kind of Blue",
        "songs": [
            {
                "id": 5001,
                "title": "So What"
            },
            {
                "id": 5002,
                "title": "Freddie Freeloader"
            },
            {
                "id": 5003,
                "title": "Blue in Green"
            },
            {
                "id": 5004,
                "title": "All Blues"
            },
            {
                "id": 5005,
                "title": "Flamenco Sketches"
            }
        ]
    },
    {
        "id": 1002,
        "artist": "John Coltrane",
        "title": "A Love Supreme",
        "songs": [
            {
                "id": 6001,
                "title": "Resolution"
            },
            {
                "id": 6002,
                "title": "Pursuance"
            },
            {
                "id": 6003,
                "title": "Psalm"
            }
        ]
    },
    {
        "id": 1003,
        "artist": "Dave Brubeck ",
        "title": "Time Out",
        "songs": [
            {
                "id": 7001,
                "title": "Blue Rondo à la Turk"
            },
            {
                "id": 7002,
                "title": "Strange Meadow Lark"
            },
            {
                "id": 7003,
                "title": "Take Five"
            },
            {
                "id": 7004,
                "title": "Three to Get Ready"
            },
            {
                "id": 7005,
                "title": "Kathy's Waltz"
            },
            {
                "id": 7006,
                "title": "Everybody's Jumpin'"
            },
            {
                "id": 7007,
                "title": "Pick up Sticks"
            }
        ]
    }    
  ]
}
```

Use those functions to send data back to the client when they request album or song information.

If they request any IDs that do not exist, respond with the message "Data not found."

## Bonus: Send JSON using `res.json()`

Instead of `res.send()`, you can pass the response data to `res.json()`, which expects to receive an object or an array.


# Convert the Chuck Norris bonus to express

Using your own solution (or [this one](https://github.com/radishmouse/routing-templating-madlibs/tree/bonus2-solution)), convert the Chuck Norris Madlib to use express.js.
