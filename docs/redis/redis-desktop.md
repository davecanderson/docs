---
title: Redis Admin Desktop App
---

The [Redis Admin UI](/admin-ui-redis) lets you manage your App's configured Redis Server with a user-friendly UX for managing core Redis data types, simple search functionality to quickly find Redis values, quick navigation between related values, first class support for JSON values and a flexible command interface and command history to inspect all previously run redis commands that's easily editable & rerun.

[![](/images/admin-ui/redis-desktop.png)](/admin-ui-redis)

It's available as a stand-alone Redis Desktop App which you can run by installing [.NET SDK](https://dotnet.microsoft.com/download) and run [install/app.ps1](https://servicestack.net/install/app.ps1) to install the [`app` dotnet tool](/netcore-windows-desktop):

```
powershell iwr gist.cafe/install.ps1 -useb | iex
```

Then run `redis` Vue Desktop App in a browser:

```
app://redis
```

Or from the command-line:

```
app open redis
```

<h3 class="text-center font-medium text-3xl m-0 py-8">Video feature tour</h3>

<iframe class="video-hd" src="https://www.youtube.com/embed/AACZtTOcQbg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
