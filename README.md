# Scholarly API


*Please note all the naming is rough/imaginary, things will need adjusting to match database realities*


There's (roughly) 3 major Wikipedia API endpoints used in Wikitree. Our scholarly API could also follow this pattern. Mock requests & responses are in the attached files.

- `article.js` - fetch an article
- `suggest.js` -  fetch title suggestions
- `search.js` - fetch full search results


Also there's another endpoint that seems helpful: a list of fields. This way we could generate a legend for the user, as well as give the app a central reference for looking up field colors.

- `fields.js` - fetch all fields and their corresponding colors


#### Open questions
- Do fields have their own ID?
- Would figures have their own objects? (ID, URL, caption, etc)
- Can PDFs be fetched by article ID, or should their URL be part of the response?
- Should article reference lists be full article objects themselves? Currently listed as full article object minus figures and references.
	- Wait, no we can't include references inside references... would recurse into oblivion
	- Perhaps fetching an article should be split into "fetch article" and "fetch references"? 
		- This could help with reusability / consistency in the code
		- Though, splitting across two endpoints would add some AJAX hairiness in the client


#### Todo/future
- Authorship pages (paginated list of articles by author ID, maybe with optional filters?)
	- Browsing by author could get interesting/complex, something to explore more.
- Field complexities (field hierarchy? article's field composition percentages?)
