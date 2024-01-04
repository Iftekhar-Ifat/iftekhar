import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import projects from './projects'
import techStack from './techStack'
import {schemaTypes} from '.'
import {createSchema} from 'sanity'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, author, category, projects, techStack, blockContent]),
})
