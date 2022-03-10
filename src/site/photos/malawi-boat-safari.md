---
layout: layouts/photo-page.njk
title: Malawi Boat safari
summary: A boat safari in Malawi in Southern Africa.
date: 2005-05-15
tag: photosets
featuredimage: malawi-boat-safari-16
photosetname: malawi-safari
photos:
    - malawi-boat-safari-1
    - malawi-boat-safari-2
    - malawi-boat-safari-3
    - malawi-boat-safari-4
    - malawi-boat-safari-5
    - malawi-boat-safari-6
    - malawi-boat-safari-7
    - malawi-boat-safari-8
    - malawi-boat-safari-9
    - malawi-boat-safari-10
    - malawi-boat-safari-11
    - malawi-boat-safari-12
    - malawi-boat-safari-13
    - malawi-boat-safari-14
    - malawi-boat-safari-15
    - malawi-boat-safari-16
---
A boat safari in Malawi in Southern Africa.
<ul>
 {% for photo in photos %}
<li><img src="/images/photos/{{ photosetname }}/{{ photo }}.jpg" class="gallery__img" alt="" title="" /></li>
{% endfor %}
</ul>