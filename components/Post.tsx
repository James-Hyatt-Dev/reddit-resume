import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import React from 'react'
import Avatar from './Avatar'
import TimeAgo from 'react-timeago'
import { BookmarkAltIcon, BookmarkIcon, ChatAltIcon, DotsHorizontalIcon, GiftIcon, ShareIcon } from '@heroicons/react/outline'

type Props = {
    post: Post
}

function Post({post}: Props) {
  return (
    <div className='flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600'>
        <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
            {/* votes */}
            <ArrowUpIcon className='voteButtons hover:text-red-400' />
            <p className='text-black text-xs font-bold'>0</p>
            <ArrowDownIcon className='voteButtons hover:text-blue-400' />
        </div>

        <div className='p-3 pb-1'>
            <div className='flex items-center space-x-2'>
                {/* header */}
                <Avatar seed={post.subreddit[0]?.topic} />
                <p className='text-xs text-gray-400'>
                    <span className='font-bold text-black hover:text-blue-400'>
                        r/{post.subreddit[0].topic} 
                    </span> • Posted by u/{post.username} <TimeAgo date={post.created_at} />
                </p>
            </div>
            
            <div className='py-4'>
                {/* body */}
                <h2 className='text-xl font-semibold'>
                    {post.title}
                </h2>
                <p className='mt-2 text-sm font-light'>
                    {post.body}
                </p>
            </div>
            
            <div>
                {/* image */}
                <img 
                    className='w-full' 
                    src={post.image}
                    alt='Image that belongs to this specific post'
                />
            </div>
            
            <div className='flex space-x-4 text-gray-400 '>
                {/* footer */}
                <div className='postButtons'>
                    <ChatAltIcon className='h-6 w-6' />
                    <p className=''>{post.comments.length} Comment(s)</p>
                </div>

                <div className='postButtons'>
                    <GiftIcon className='h-6 w-6' />
                    <p className=''>{post.comments.length} Award</p>
                </div>

                <div className='postButtons'>
                    <ShareIcon className='h-6 w-6' />
                    <p className=''>{post.comments.length} Share</p>
                </div>

                <div className='postButtons'>
                    <BookmarkIcon className='h-6 w-6' />
                    <p className=''>{post.comments.length} Save</p>
                </div>

                <div className='postButtons'>
                    <DotsHorizontalIcon className='h-6 w-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post