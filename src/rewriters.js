export class LinksRewriter {
    
  constructor(links){
      this.links = links
  }

  async element(element) {
      let content = ''
      this.links.forEach( link => {
          content += `<a target="_blank" href="${link.url}">${link.name}</a>`
      });

      element.setInnerContent(content, { html: true});
  }
}

export class SocialLinksRewriter {
  
  constructor(links){
      this.links = links
  }

  async element(element) {
      // element.tagName = "Joseph Mpo Yeti"
      element.removeAttribute('style')
      let content = ''
      this.links.forEach( link => {
          content += `<a target="_blank" href="${link.url}">
                      <svg fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                          ${link.path}
                      </svg>
                  </a>`
      });
      element.setInnerContent(content, {html: true});
  }
}

export class ProfileRewriter {
  async element(element) {
      element.removeAttribute('style')
  }
}

export class TitleRewriter {
  async element(element) {
      element.setInnerContent('Joseph Mpo Yeti')
  }
}

export class AvatarRewriter {
  async element(element) {
      const imgURL = "https://avatars0.githubusercontent.com/u/55380155?s=460&u=64f9fe05c24917489cd88d87c6b96989d54946d9&v=4"
      element.setAttribute('src', imgURL);
  }
}

export class NameRewriter {
  async element(element) {
      element.setInnerContent('mpoyeti')
  }
}

export class BodyRewriter {
  async element(element){
      element.setAttribute('class', 'bg-green-700')
  }
}
