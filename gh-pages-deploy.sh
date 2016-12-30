# https://gist.github.com/cobyism/4730490
azk shell -- npm run build
# Troca path dos arquivos estaticos para funcionar no gh-pages
cat dist/index.html | sed -e "s/static/vue-lab\/static/g" > dist/index-new.html
rm dist/index.html
mv dist/index-new.html dist/index.html
git add dist && git commit -m "Build app"
git subtree push --prefix dist origin gh-pages
