import { Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

export const metadata: Metadata = {
  title: 'Notes',
  description: '阅读笔记页面，记录学习与思考。'
}

export default function ReadingNotesPage() {
  return (
    <SimpleLayout
      title="My personal reading notes"
      intro="这里是我的笔记，记录了学习过程中的思考与收获。"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <div>敬请期待阅读笔记内容……</div>
        </div>
      </div>
    </SimpleLayout>
  )
} 