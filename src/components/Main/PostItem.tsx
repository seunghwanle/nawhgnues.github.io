import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s box-shadow;
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 328px;
  height: 220px;
  border-radius: 10px;
  margin-right: 30px;
  object-fit: contain;
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 15px;
`

const PostLink = styled(Link)`
  height: 100%;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 10px;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.p`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
  color: #ff5f4d;
`

const TagLink = styled(Link)`
  &:hover {
    color: #5e9bf8;
  }
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper>
      <PostLink to={link}>
        <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      </PostLink>

      <PostLink to={link}>
        <PostItemContent>
          <div>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Summary>{summary}</Summary>
          </div>
          <Category>
            {categories.map(category => (
              <CategoryItem key={category}>
                <TagLink to={`?category=${category}`}>#{category}</TagLink>
              </CategoryItem>
            ))}
          </Category>
        </PostItemContent>
      </PostLink>
    </PostItemWrapper>
  )
}

export default PostItem
