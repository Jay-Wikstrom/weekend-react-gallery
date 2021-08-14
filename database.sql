CREATE TABLE "galleryItems" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(50),
	"path" VARCHAR(255),
	"description" VARCHAR(255),
	"likes" INTEGER
);


INSERT INTO "galleryItems" ("title", "path", "description", "likes")
VALUES ('My Dog', 'images/MyDog.PNG', 'Here is a picture of my dog', 0),
		('My Other Dog', 'images/OtherDog.PNG', 'Here is a picture of my other dog', 0),
		('My Cat', 'images/MyCat.PNG', 'Here is a picture of my cat', 0),
		('RoseBowl', 'images/RoseBowl.jpg', 'A picture I took at the Rose Bowl in 2013', 0),
		('My Favorite Football Team', 'images/MyFavoriteFootballTeam.jpg', 'My favorite football team', 0),
		('My Favorite Basketball Team', 'images/MyFavoriteBasketballTeam.jpg', 'My favorite Basketball team', 0);
		