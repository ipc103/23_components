console.log(BlogPosts);

function App (props) {
  const appElement = document.createElement('div');
  const navElement = NavBar({title: 'The Four Oh Fours'});
  const postList = PostsList({posts: props.posts})
  // const postItemElement = PostItem({title: 'First Post', content: 'Here is a great post...'});
  // const postItemElement2 = PostItem({title: 'Second Post', content: "Here is another great post..."});

  appElement.appendChild( navElement );
  appElement.appendChild( postList );

  // $(appElement).append( [postItemElement, postItemElement2] );

  return appElement;
}

function PostsList (props){
  const postListElement = document.createElement('div');

  $(postListElement).append(props.posts.map( post => PostItem(post)));

  return postListElement;
}

function PostItem( props ){
  const postItemElement = document.createElement('div');
  postItemElement.className = 'panel panel-default'

  const panelHeading = document.createElement('div');
  panelHeading.className = 'panel-heading';

  const panelTitle = document.createElement('h3');
  panelTitle.className = 'panel-title'
  panelTitle.innerHTML = props.title;

  const panelBody = document.createElement('div')
  panelBody.className = 'panel-body';
  panelBody.innerHTML = props.content;


  panelHeading.appendChild(panelTitle);
  postItemElement.appendChild(panelHeading);
  postItemElement.appendChild(panelBody);

  return postItemElement;
}

function NavBar ( props ) {
  const navElement = document.createElement('nav');
  navElement.className = 'navbar navbar-inverse';

  const navHeader = document.createElement('div');
  navHeader.className = 'navbar-header'

  const brandLink = document.createElement('a');
  brandLink.className = 'navbar-brand';
  brandLink.innerHTML = props.title;

  navHeader.appendChild(brandLink);
  navElement.appendChild(navHeader);

  return navElement;
}

$('#container').replaceWith( App({posts: BlogPosts}) );
