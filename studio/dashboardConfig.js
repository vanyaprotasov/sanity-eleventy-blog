export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606341813378510f12a7b29f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ye3qf951',
                  apiId: 'd557a74c-6185-486e-94cd-151e6b47899d'
                },
                {
                  buildHookId: '6063418189cd830fbfe23dfa',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m69thvds',
                  apiId: 'ad683c72-4c2b-40e9-93b7-51c80cbd7058'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vanyaprotasov/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m69thvds.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
