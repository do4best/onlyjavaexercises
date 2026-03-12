class ANamed:
    name=""
class Flower(ANamed):
    pass
class City(ANamed):
    pass
class Star(ANamed):
    pass

rose = Flower()
rose.name="Rose"
city = City()
city.name="Lahore"
star = Star()
star.name="The Star"

rows = [rose,city,star]
names = ", ".join([r.name for r in rows])
print(names)
