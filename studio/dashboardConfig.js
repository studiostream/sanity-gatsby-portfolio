export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60547697960ce5de4c1416fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bkdb5ya5',
                  apiId: '5ea77464-57e5-4a04-a0b4-11fcb3f94145'
                },
                {
                  buildHookId: '605476975f23232441634fe7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y9vrppgn',
                  apiId: 'be2ea60c-ddc8-42e4-b47b-2aba737e9976'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/studiostream/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y9vrppgn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
