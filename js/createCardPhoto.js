import { createElem } from "./createElem.js";

export const createCardPhoto = (data) => {
  const card = createElem('li', {
    className: 'card'
  });

  const cardItem = createElem('a', {
    id: data.id,
    className: 'grid-item',
    href: `page.html?photo=${data.id}`
  });;


  const photo = new Image();
  photo.width = '200';
  photo.src = data.urls.small;
  photo.alt = data.alt_decription;

  const author = createElem('a', {
    id: data.id,
    className: 'card__author',
    href: data.user.links.html
  });



  const avatarAuthor = new Image();
  avatarAuthor.className = 'author__photo';
  avatarAuthor.src = data.user.profile_image.medium
  avatarAuthor.width = '32';
  avatarAuthor.height = '32';
  avatarAuthor.alt = data.user.bio;
  avatarAuthor.title = data.user.username

  author.append(avatarAuthor);

  const likeBtn = document.createElement('button');
  likeBtn.className = 'card__photo-like';
  likeBtn.textContent = data.liles;

  const downloadLink = createElem('a', {
    id: data.id,
    className: 'card__download',
    href: data.links.download,
    download: true,
    target: '_blank'
  });

  cardItem.append(photo, author, likeBtn, downloadLink);

  card.append(cardItem);

  return card
}


