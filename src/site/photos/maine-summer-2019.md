---
layout: layouts/photo-page.njk
title: Maine 2019
summary: My wife and I have been going to Maine for the past 5 summers. We usually fly into Portland, ME. Spend a few nights there enjoying the city and the fabulous food scene the and then head about 3 hours north to Deer Isle. This years trip was highlighted with a opportunity to eat at The Lost Kitchen in Freedom, ME.
date: 2019-08-23
featuredimage: maine-2019-07
photosetname: maine
photos:
    - maine-2019-01
    - maine-2019-02
    - maine-2019-03
    - maine-2019-04
    - maine-2019-05
    - maine-2019-06
    - maine-2019-07
    - maine-2019-08
    - maine-2019-09
    - maine-2019-10
    - maine-2019-11
    - maine-2019-12
    - maine-2019-13
    - maine-2019-14
    - maine-2019-15
    - maine-2019-16
---

<ul>
 {% for photo in photos %}
<li><img src="/images/photos/{{ photosetname }}/{{ photo }}.jpg" class="gallery__img" alt="" title="" /></li>
{% endfor %}
</ul>