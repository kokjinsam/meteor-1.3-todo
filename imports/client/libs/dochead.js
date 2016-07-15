import { DocHead } from 'meteor/kadira:dochead';

/**
 * Set title to the page.
 *
 * @param {string} link - Page title
 */
function setTitle(title) {
  if (typeof title === 'string' || title instanceof String) {
    DocHead.setTitle(title);
    return;
  }

  throw new Error('Title has to be a string');
}

/**
 * Add a meta tag.
 * Eg, {name:"description", content:"content"}
 *
 * @param {Object} meta - Meta tag info
 * @param {string} meta.name - tag name
 * @param {string} meta.content - tag content
 */
function addMeta(meta) {
  if (meta instanceof Object) {
    DocHead.addMeta(meta);
    return;
  }

  throw new Error('Meta has to be an object');
}

/**
 * Add a link tag.
 * Eg, {rel:"icon", type:"image/png", href:"/url"}
 *
 * @param {Object} link - Link tag info
 * @param {string} link.rel - link rel
 * @param {string} link.type - link type
 * @param {string} link.href - link href
 */
function addLink(link) {
  if (link instanceof Object) {
    DocHead.addLink(link);
    return;
  }

  throw new Error('Link has to be an object');
}

/**
 * Add an array of meta tags.
 * Eg, {name:"description", content:"content"}
 *
 * @param {Object[]} metas - array of Meta tag info
 * @param {string} metas[].name - tag name
 * @param {string} metas[].content - tag content
 */
function addMetas(metas) {
  if (metas instanceof Array) {
    metas.forEach(meta => {
      addMeta(meta);
    });
    return;
  }

  throw new Error('Metas have to in an array');
}

/**
 * Add an array of link tags.
 * Eg, {rel:"icon", type:"image/png", href:"/url"}
 *
 * @param {Object[]} links - Link tag info
 * @param {string} links[].rel - link rel
 * @param {string} links[].type - link type
 * @param {string} links[].href - link href
 */
function addLinks(links) {
  if (links instanceof Array) {
    links.forEach(link => {
      addLink(link);
    });
    return;
  }

  throw new Error('Links have to in an array');
}

/**
 * Add twitter-specific tags
 *
 * @param {Object} info - tag info for twitter
 * @param {string} info.card
 * @param {string} info.site
 * @param {string} info.url
 * @param {string} info.title
 * @param {string} info.desc
 * @param {string} info.image
 */
function addTwitter(info) {
  const {
    url = 'https://easymake.io',
    site = 'Easy Make',
  } = info;

  if (info instanceof Object) {
    if (info.card) {
      addMeta({
        name: 'twitter:card',
        content: info.card,
      });
    }

    if (site) {
      addMeta({
        name: 'twitter:site',
        content: site,
      });
    }

    if (url) {
      addMeta({
        name: 'twitter:url',
        content: url,
      });
    }

    if (info.title) {
      addMeta({
        name: 'twitter:title',
        content: info.title,
      });
    }

    if (info.desc) {
      addMeta({
        name: 'twitter:description',
        content: info.desc,
      });
    }

    if (info.image) {
      addMeta({
        name: 'twitter:image',
        content: info.image,
      });
    }
  }

  throw new Error('Info has to be an object');
}

/**
 * Add OG-specific tags
 *
 * @param {Object} info - tag info for twitter
 * @param {string} info.type
 * @param {string} info.site_name
 * @param {string} info.url
 * @param {string} info.title
 * @param {string} info.desc
 * @param {string} info.image
 */
function addOG(info) {
  const {
    url = 'https://easymake.io',
    site_name = 'Easy Make',
  } = info;

  if (info instanceof Object) {
    if (info.type) {
      addMeta({
        name: 'og:type',
        content: info.type,
      });
    }

    if (site_name) {
      addMeta({
        name: 'og:site_name',
        content: site_name,
      });
    }

    if (url) {
      addMeta({
        name: 'og:url',
        content: url,
      });
    }

    if (info.title) {
      addMeta({
        name: 'og:title',
        content: info.title,
      });
    }

    if (info.desc) {
      addMeta({
        name: 'og:description',
        content: info.desc,
      });
    }

    if (info.image) {
      addMeta({
        name: 'og:image',
        content: info.image,
      });
    }
  }

  throw new Error('Info has to be an object');
}

export {
  setTitle,
  addMeta,
  addMetas,
  addLink,
  addLinks,
  addTwitter,
  addOG,
};
