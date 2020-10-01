import { TableHeader } from "../components/shared/Table/Table"

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

export default function organizeData(data: any[], headers: TableHeader[]): [OrganizedItem[], IndexedHeaders] {
    const indexedHeaders: IndexedHeaders = {}
    headers.forEach( header => indexedHeaders[header.key] = header )
    const headerKeysInOrder = Object.keys(indexedHeaders)
    //console.log(headerKeysInOrder)
    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}
        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key]
        })

        organizedItem.$original = item

        return organizedItem
    })
    //console.table(organizedData)
    return [organizedData, indexedHeaders]
}