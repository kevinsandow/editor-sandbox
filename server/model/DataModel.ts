import { randomUUID } from 'node:crypto'

import data from './data.json'

type Entry = {
  id: string
  title: string
  content: string
}

class DataModel {
  private entries: Array<Entry>

  constructor() {
    this.entries = data.map((entry) => ({ id: randomUUID(), ...entry }))
  }

  getAll() {
    return this.entries
  }

  addEntry(title: string, content: string) {
    this.entries.push({
      id: randomUUID(),
      title,
      content,
    })
  }

  private getEntryById(id: string) {
    const entry = this.entries.find((e) => e.id === id)
    if (!entry) {
      throw `Entry #${id} does not exist`
    }

    return entry
  }

  getEntry(id: string) {
    return this.getEntryById(id)
  }

  updateEntry(id: string, title: string, content: string) {
    const entry = this.getEntryById(id)

    entry.title = title
    entry.content = content
  }

  deleteEntry(id: string) {
    this.getEntryById(id)

    this.entries = this.entries.filter((e) => e.id !== id)
  }
}

export default new DataModel()
