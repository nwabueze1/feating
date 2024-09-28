import { gql } from '@apollo/client';

export const GET_POSTS_BY_BLOG_UUID = gql`
  query GqlGetPostsByBlogUuid($blog_uuid: ID, $page: Int!) {
    getPostsByBlogUuid(input: { blog_uuid: $blog_uuid, page: $page, first: 9 }) {
      data {
        uuid
        title
        featured_image
        excerpt
        published_at
        slug
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY_UUID = gql`
  query GqlGetPostsByCategoryUuid($category_uuid: ID, $page: Int!) {
    getPostsByCategoryUuid(input: { category_uuid: $category_uuid, page: $page, first: 9 }) {
      data {
        uuid
        title
        featured_image
        excerpt
        published_at
        slug
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;
