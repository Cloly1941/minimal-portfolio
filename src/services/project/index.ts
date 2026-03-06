// ** Mock data
import {mockDataDetail} from "@/mock-data";

export const getDetailBySlug = (slug: string) => {
    return mockDataDetail.find(item => item.slug === slug)
}