# Code Citations

## License: unknown
https://github.com/compactcode/blog/blob/3b75b165b1a87913b880a1ad083c226c4be6d7e6/templates/layout.rhtml

```
Look at your `src/controllers/` folder structure. You're missing the **header.ejs** file that's being imported.

Move or create:

````html
<!-- filepath: /Users/esmeraldasanchez/Desktop/BYUI/4rd semester/CSE 340- Web Backend Dev/cse340-practice-Sanchez/src/views/partials/header.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/catalog.css">
    <% if (NODE_ENV && NODE_ENV.includes('dev')) { %>
    <script>
        const host = window.location.hostname;
        const currentPort = window.location.port;
        const wsPort = currentPort ? (parseInt(currentPort) + 1) : 3001;
        const ws = new WebSocket(`ws://${host}:${wsPort}`);
        ws.onclose = () => setTimeout(() => location.reload(), 2000);
    </script>
    <% } %>
</head>
<body class="<%= typeof bodyClass !== 'undefined' ? bodyClass : '' %>">
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/catalog">Course Catalog</a></li>
                <li><a href="/demo">Middleware Demo</a></li>
            </ul>
        </nav>
```


## License: unknown
https://github.com/compactcode/blog/blob/3b75b165b1a87913b880a1ad083c226c4be6d7e6/templates/layout.rhtml

```
Look at your `src/controllers/` folder structure. You're missing the **header.ejs** file that's being imported.

Move or create:

````html
<!-- filepath: /Users/esmeraldasanchez/Desktop/BYUI/4rd semester/CSE 340- Web Backend Dev/cse340-practice-Sanchez/src/views/partials/header.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/catalog.css">
    <% if (NODE_ENV && NODE_ENV.includes('dev')) { %>
    <script>
        const host = window.location.hostname;
        const currentPort = window.location.port;
        const wsPort = currentPort ? (parseInt(currentPort) + 1) : 3001;
        const ws = new WebSocket(`ws://${host}:${wsPort}`);
        ws.onclose = () => setTimeout(() => location.reload(), 2000);
    </script>
    <% } %>
</head>
<body class="<%= typeof bodyClass !== 'undefined' ? bodyClass : '' %>">
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/catalog">Course Catalog</a></li>
                <li><a href="/demo">Middleware Demo</a></li>
            </ul>
        </nav>
```


## License: unknown
https://github.com/compactcode/blog/blob/3b75b165b1a87913b880a1ad083c226c4be6d7e6/templates/layout.rhtml

```
Look at your `src/controllers/` folder structure. You're missing the **header.ejs** file that's being imported.

Move or create:

````html
<!-- filepath: /Users/esmeraldasanchez/Desktop/BYUI/4rd semester/CSE 340- Web Backend Dev/cse340-practice-Sanchez/src/views/partials/header.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/catalog.css">
    <% if (NODE_ENV && NODE_ENV.includes('dev')) { %>
    <script>
        const host = window.location.hostname;
        const currentPort = window.location.port;
        const wsPort = currentPort ? (parseInt(currentPort) + 1) : 3001;
        const ws = new WebSocket(`ws://${host}:${wsPort}`);
        ws.onclose = () => setTimeout(() => location.reload(), 2000);
    </script>
    <% } %>
</head>
<body class="<%= typeof bodyClass !== 'undefined' ? bodyClass : '' %>">
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/catalog">Course Catalog</a></li>
                <li><a href="/demo">Middleware Demo</a></li>
            </ul>
        </nav>
```

