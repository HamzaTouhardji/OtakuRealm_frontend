from jikanpy import Jikan
import time, json
jikan = Jikan()

#test
#mushishi = jikan.anime(457)
#print(mushishi)

data = {}

pageAnime = 1
while pageAnime<15:
    animes = jikan.top(type='anime', page=pageAnime)["top"]
    
    pageAnime += 1

    for a in animes:
        details = jikan.anime(a["mal_id"])
        time.sleep(2)
        genres = [g["mal_id"] for g in details["genres"]]
        pageReviews = 1
        print(a["title"])
        reviews = jikan.anime(a["mal_id"], extension='reviews', page=pageReviews)["reviews"]
        time.sleep(2)
        while len(reviews)>0:
            print("page",pageReviews)
            pageReviews+=1
            for r in reviews:
                if not r["reviewer"]["url"] in data.keys():
                    data[r["reviewer"]["url"]] = {"reviews":[]}
                data[r["reviewer"]["url"]]["reviews"].append({ "anime_id":a["mal_id"], "genres":genres, "note":r["reviewer"]["scores"]["overall"] })
            reviews = jikan.anime(a["mal_id"], extension='reviews', page=pageReviews)["reviews"]
            time.sleep(2)

with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)