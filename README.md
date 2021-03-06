typo.js [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
=======
Simple typo notifications system for your website powered by google forms, ``confirm`` and ``alert`` :). Tell user press Ctrl+Enter if they noticed a typo.

[Live example](http://jsbin.com/mucanu/3/)

![Screenshot of example](http://i.imgur.com/39DM2GS.png)

## Usage
1. Create google form with 3 fields: Typo selection, Typo content, URL ([example](https://docs.google.com/forms/d/1sQhv81wN65__7H4quwhDbecvtUxzAGZ-lMmlwF9MKcc/viewform))
2. Inspect created form using web inspector. You need form action and fields names.
3. Insert typo.js script before ``</body>``
4. Run ``typo`` function below:

```js
typo({
	formURL: FORM_ACTION_URL,
	selectionName: NAME_OF_SELECTION_INPUT,
	commentName: NAME_OF_COMMENT_INPUT,
	pageName: NAME_OF_URL_INPUT
});
```

Example:
```js
typo({
	formURL: 'https://docs.google.com/forms/d/1sQhv81wN65__7H4quwhDbecvtUxzAGZ-lMmlwF9MKcc/formResponse',
	selectionName: 'entry.1972481987',
	commentName: 'entry.1777335671',
	pageName: 'entry.339184258'
});
```

**Licensed under WTFPL**
