# Scholarly API


There's (roughly) 3 major Wikipedia API endpoints that we use for Wikitree. I've mocked up example request/response code for each one in the attached files:
1. `article.js` - fetch an article
2. `suggest.js` -  fetch title suggestions
3. `search.js` - fetch full search results


Also, there's another endpoint I though might help us: a list of fields. This way we could generate a legend, as well as give the app a central reference for looking up field colors:
4. `fields.js` - fetch all fields and their corresponding colors


*Please note all the naming is rough/imaginary, I'll adjust everything after I've seen how the database looks (for example, I believe article id is pID?).*


Questions:
- Do fields have their own id?
- Can PDFs be fetched by article id, or should their pdf url be part of the ajax response?
- Should article reference lists be full article objects themselves? currently listed as full article object minus figures and references.
	- In fact, on reflection, we definitely cannot include references inside references... that would recurse us into oblivion
	- Perhaps fetching an article should be split into "fetch article" and "fetch references"? That could help with reusability / consistency in the code.


Todo:
- Authorship pages (paginated list of articles by author id, maybe also filtered by fields, keywords, etc?)
	- Browsing by author could get interesting/complex, something to explore more.
- Field complexities (field hierarchy? article's field composition percentages?)
