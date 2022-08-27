---
title: Redis Admin
---

The Redis Admin UI lets you manage your App's configured Redis Server with a user-friendly UX for managing core Redis data types, including simple search to quickly find Redis values, quick navigation between related values, first class support for JSON values and a flexible command interface and command history to inspect all previously run redis commands that's easily editable & rerun.

<iframe class="video-hd" src="https://www.youtube.com/embed/K4459zrrxOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Info

The Redis Admin home page shows the output of the Redis [INFO](https://redis.io/commands/info/) command containing detailed information on the remote redis server:

![](/images/admin-ui/admin-ui-redis.png)

By default it uses the App's configured database but can easily switch between Redis databases with the numbered Database dropdown.

## Search

The Search tab is where you'll find the primary functionality for being able to quickly search through the Redis keyspace to find where you can create or edit new Redis [Strings](https://redis.io/docs/data-types/strings/), [Lists](https://redis.io/docs/data-types/lists/), [Sets](https://redis.io/docs/data-types/sets/), [Sorted Sets](https://redis.io/docs/data-types/sorted-sets/) and [Hashes](https://redis.io/docs/data-types/hashes/):

![](/images/admin-ui/admin-ui-redis-new.png)

### Set

Selecting a Redis Data Type displays an optimized form you can use to create a new Value of that type:

![](/images/admin-ui/admin-ui-redis-new-set.png)

Which you can view in a **Pretty** view where collections like sets are displayed in a formatted JS Array letting you can copy all its values:

![](/images/admin-ui/admin-ui-redis-set-pretty.png)

A **Preview** mode displaying the results in a human-friendly table view:

![](/images/admin-ui/admin-ui-redis-set-preview.png)

And an **Edit** mode where you can **add** and **delete** members:

![](/images/admin-ui/admin-ui-redis-set-edit.png)

### String

The same functionality is available for all Data Types, whilst **Strings** contain first-class support for JSON strings in their **Pretty**:

![](/images/admin-ui/admin-ui-redis-string-pretty.png)

**Preview**

![](/images/admin-ui/admin-ui-redis-string-preview.png)

and **Edit** views where you can **format JSON** when creating or edit JSON Strings:

![](/images/admin-ui/admin-ui-redis-string-edit.png)

### Hash

Hashes have the same functionality as **SET** with an additional field to capture the hash entries value:

![](/images/admin-ui/admin-ui-redis-hash-edit.png)

### Sorted Set

Whilst Sorted Sets maintains an extra numerical field to capture Sorted Set scores:

![](/images/admin-ui/admin-ui-redis-zset-edit.png)

## Command

The Command tab gives you a flexible Command bar letting you run adhoc Redis commands against the selected database. It includes a Command History displaying all previous commands run which you can select on to quickly edit & rerun commands:

![](/images/admin-ui/admin-ui-redis-command.png)

By default it blocks running dangerous and unsuitable commands for a Web interface which can be modified when registering the `AdminRedisFeature`, which by default prevents the commands below:

```csharp
Plugins.Add(new AdminRedisFeature {
    IllegalCommands = {
        "BLMOVE",
        "BLMPOP",
        "BLPOP",
        "BRPOP",
        "BRPOPLPUSH",
        "FLUSHDB",
        "FLUSHALL",
        "MONITOR",
    }
})
```

## Profile App Redis Usage

The command history maintains a log for all commands executed in the Redis Admin UI, you can inspect the redis commands executed by your Services with the [Redis Profiling](/admin-ui-profiling#redis-profiling) built into the [Admin Profiling UI](/admin-ui-profiling).
