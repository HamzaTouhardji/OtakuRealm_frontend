from jikanpy import Jikan
import time, json
# Import MariaDB Connector/Python module
import mariadb

# Establish a connection
connection= mariadb.connect(user="otaku", database="otakurealm", host="otakurealm.mooo.com", password='otakurealm')
cursor= connection.cursor()

jikan = Jikan()


data = []

pageAnime = 1
while True:
    print("\npage", pageAnime)
    try:
        animes = jikan.top(type='anime', subtype='tv', page=pageAnime)["top"]
    except:
        break
    
    pageAnime += 1
    
    for a in animes:
        try:
            details = jikan.anime(a["mal_id"])
            time.sleep(2)
        except BaseException as e:
            print(e)
            continue
        genres = [g["mal_id"] for g in details["genres"]]
        pageReviews = 1
        print(a['title'])

        
        try:
            data.append("insert into otakurealm.recommandation_anime values("+str(a['mal_id'])+", '"+str(a['title']).replace("'", "")+"', '"+str(details['premiered'])+"', "+str(a['score'])+", '"+str(details['studios'][0]["name"]).replace("'", "’")+"', "+str(([i for i in [details['episodes']] if i!=None ] + [0])[0])+", "+str(details['duration'].split(" ")[0])+", '"+str(details['synopsis']).replace("'", "’")+"', '"+str(a['image_url'])+"');")
            cursor.execute(data[-1])
            for g in genres:
                cursor.execute("insert into otakurealm.recommandation_anime_genres (anime_id, genre_id) values("+str(a['mal_id'])+", "+str(g)+")")
            connection.commit()
        except BaseException as e:
            print(e)
        
        """reviews = jikan.anime(a["mal_id"], extension='reviews', page=pageReviews)["reviews"]
        time.sleep(2)
        while len(reviews)>0:
            print("page",pageReviews)
            pageReviews+=1
            for r in reviews:
                if not r["reviewer"]["url"] in data.keys():
                    data[r["reviewer"]["url"]] = {"reviews":[]}
                data[r["reviewer"]["url"]]["reviews"].append({ "anime_id":a["mal_id"], "genres":genres, "note":r["reviewer"]["scores"]["overall"] })
            reviews = jikan.anime(a["mal_id"], extension='reviews', page=pageReviews)["reviews"]
            time.sleep(2)"""

cursor.close()
connection.close()
"""for i in data:
    print(i)

with open('data.txt', 'w') as outfile:
    for i in data:
        outfile.write(data+"\n")"""