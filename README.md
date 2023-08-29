# svgMapDemo
demo and template content for svgMap.js

## GitHub Pages
https://svgmap.github.io/svgMapDemo/

## Note
By cloning this repository and publishing it as static web content, a basic SVGMap page can be built; using GitHub Pages is also possible. You can also add any data you wish to publish by adding it as static content using [svgMapTools](https://github.com/svgmap/svgMapTools).

However, some layers, such as the raster GIS layer, [require proxy preparation and html modification for cross-origin access](https://www.svgmap.org/wiki/index.php?title=%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB14#appendix:.E3.82.AF.E3.83.AD.E3.82.B9.E3.82.AA.E3.83.AA.E3.82.B8.E3.83.B3.E3.82.A2.E3.82.AF.E3.82.BB.E3.82.B9). ```proxyPath``` variable in the script of index.html corresponds to this.