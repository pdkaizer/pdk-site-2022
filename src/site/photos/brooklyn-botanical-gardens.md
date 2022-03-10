---
layout: layouts/photo-page.njk
title: Brooklyn Botanical Gardens
summary: A day at the Brooklyn Botanical Gardens.
date: 2015-05-10
featuredimage: 2015-05-03-NYC-160
longlat: 40.6694153,-73.9645676
photosetname: Brooklyn-botanical
photos:
    - 2015-05-03-NYC-123
    - 2015-05-03-NYC-124
    - 2015-05-03-NYC-125
    - 2015-05-03-NYC-127
    - 2015-05-03-NYC-143
    - 2015-05-03-NYC-149
    - 2015-05-03-NYC-150
    - 2015-05-03-NYC-160
    - 2015-05-03-NYC-164
    - 2015-05-03-NYC-165
    - 2015-05-03-NYC-167
    - 2015-05-03-NYC-170
    - 2015-05-03-NYC-171
---

<ul>
 {% for photo in photos %}
<li><img src="/images/photos/{{ photosetname }}/{{ photo }}.jpg" class="gallery__img" alt="" title="" /></li>
{% endfor %}
</ul>