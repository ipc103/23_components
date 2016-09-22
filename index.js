function App(props){
  const app = document.createElement('div');
  app.appendChild(NavBar({name: '404s'}));
  const panels = props.posts.map(post =>
    Panel({heading: post.title, body: post.content})
  )
  $(app).append(panels);
  return app;
}


function NavBar(props){
  const nav = document.createElement('nav');
  const header = document.createElement('div')
  const brand = document.createElement('a');

  nav.className = 'nav navbar-default';
  header.className = 'navbar-header'
  brand.className = 'navbar-brand';
  brand.innerHTML = "404s";
  header.appendChild(brand);
  nav.appendChild(header);
  return nav;
}

function Panel(props){
  const panel = document.createElement('div');
  panel.className = 'panel panel-default'

  const panelHeading = document.createElement('div');
  panelHeading.className = 'panel-heading'

  const panelBody = document.createElement('div');
  panelBody.className = 'panel-body';

  panelHeading.innerHTML = props.heading
  panelBody.innerHTML = props.body
  panel.appendChild(panelHeading);
  panel.appendChild(panelBody);

  return panel;
}


$('div#container').replaceWith(App({posts: blogPosts}));
