---
title: Reading & Writing
subtitle: Designer | Developer
layout: layouts/page-no-hero.njk
icon: fal fa-pencil
---

<section class="journal-listing">
        {%- for page in collections.post | reverse -%}
        <div>
            <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
            <h3><i class="far fa-calendar-alt"></i> {{ page.date | dateDisplay("LLL d, y") }}</h3>
            <p>{{ page.data.summary }}</p>
        </div>
        {%- endfor -%}
</section>