---
layout: layouts/photo-page.njk
title: My Capital Walk
summary: For the past 5+ years, I have been commuting to Washington, DC a few days a week to do design work for various US federal government agencies. I take the commuter train from Baltimore early in the morning and then usually walk to whatever agency I am doing work for. For the past several years I have been working for USPS so my walk from Union Station takes me past the US Capital. I have been documenting this walk.
date: 2020-01-10
featuredimage: us-capital-2019-featured
photosetname: US-capital
photos:
    - us-capital-2019-1
    - us-capital-2019-2
    - us-capital-2019-3
    - us-capital-2019-4
    - us-capital-2019-5
    - us-capital-2019-6
    - us-capital-2019-7
    - us-capital-2019-8
    - us-capital-2019-9
    - us-capital-2019-10
    - us-capital-2019-11
    - us-capital-2019-12
    - us-capital-2019-13
    - us-capital-2019-14
    - us-capital-2019-15
    - us-capital-2019-16
---

<ul>
 {% for photo in photos %}
<li><img src="/images/photos/{{ photosetname }}/{{ photo }}.jpg" class="gallery__img" alt="" title="" /></li>
{% endfor %}
</ul>