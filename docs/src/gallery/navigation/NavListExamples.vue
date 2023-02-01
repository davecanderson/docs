<template>
<div>
    <NavList title="Explore Vue Tailwind Components">
        <NavListItem title="DataGrid" href="/vue/gallery/datagrid" :iconSvg="Icons.DataGrid">
            DataGrid Component Examples for rendering tabular data
        </NavListItem>
        <NavListItem title="AutoQuery Grid" href="/vue/gallery/autoquerygrid" :iconSvg="Icons.AutoQueryGrid">
            Instant customizable UIs for calling AutoQuery CRUD APIs
        </NavListItem>
    </NavList>
</div>
</template>

<script setup lang="ts">
import { Icons } from '../data'
</script>