import { BlogPostForPage } from "../types"
import rejectJson from "./rejectJson"

const baseURL = import.meta.env.VITE_API_BASE_URL

export interface ContactFormDataType {
    firstName: string
    lastName: string
    email: string
    message: string
}

export interface GetPrivacyPolicyResponse {
    "success": boolean
    "message": string
    "remainingDraftsToGenerate": number | null
    "statusCode": number
    "result": {
        "title": string
        "introduction": string
        "sections": {
            "id": string
            "title": string
            "content": string
            "order": number
        }[]
    }
}

export interface GetBlogPostsResponse {
    "success": boolean
    "message": string
    "remainingDraftsToGenerate": number | null
    "statusCode": number
    "result": {
        "items": {
            "id": string
            "title": string
            "author": string
            "coverImageUrl": string
            "authorImageUrl": string
            "category": string
            "status": string
            "createdAt": string
            "updatedAt": string
            "publishedAt": string
        }[]
        "page": number
        "pageSize": number
        "totalCount": number
    }
}

export interface GetSingleBlogPostResponse {
    "success": boolean
    "message": string
    "remainingDraftsToGenerate": number | null
    "statusCode": number
    "result": BlogPostForPage
}

export type GetTermsAndConditionsResponse = GetPrivacyPolicyResponse

const submitContactForm = (data: ContactFormDataType) => {
    return fetch(
        `${baseURL}/api/v1/Content/contact-us`,
        {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
    .then(res => !res.ok ? rejectJson(res): res.json())
}

const subscribeNewsletter = (email: string) => {
    return fetch(
        `${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter/subscribe`,
        {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const unsubscribeNewsletter = (email: string) => {
    return fetch(
        `${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter/unsubscribe`,
        {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const getBlogPosts = () => {
    return fetch(`${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter?Status=Published`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const getSingleBlogPost = (id: string) => {
    return fetch(`${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter/${id}`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const getPrivacyPolicy = () => {
    return fetch(`${baseURL}/api/v1/Content/privacy-policy`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const getTermsAndConditions = () => {
    return fetch(`${baseURL}/api/v1/Content/terms-conditions`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

export {
    submitContactForm,
    subscribeNewsletter,
    unsubscribeNewsletter,
    getBlogPosts,
    getSingleBlogPost,
    getPrivacyPolicy,
    getTermsAndConditions
}