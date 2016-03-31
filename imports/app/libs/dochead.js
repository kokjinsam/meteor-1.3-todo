import { DocHead } from 'meteor/sammkj:dochead';

export function setTitle(title) {
  if (typeof title === 'string' || title instanceof String) {
    DocHead.setTitle(title);
    return;
  }

  throw new Error('Title has to be a string');
}

export function addMeta(meta) {
  if (meta instanceof Object) {
    DocHead.addMeta(meta);
    return;
  }

  throw new Error('Meta has to be an object');
}

export function addLink(link) {
  if (link instanceof Object) {
    DocHead.addLink(link);
    return;
  }

  throw new Error('Link has to be an object');
}

export function addMetas(metas) {
  if (metas instanceof Array) {
    metas.forEach(meta => {
      addMeta(meta);
    });
    return;
  }

  throw new Error('Metas have to in an array');
}

export function addLinks(links) {
  if (links instanceof Array) {
    links.forEach(link => {
      addLink(link);
    });
    return;
  }

  throw new Error('Links have to in an array');
}
