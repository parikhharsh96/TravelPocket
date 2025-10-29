export function InfoNote() {
  return (
    <div className="bg-[#fff7f2] border border-[#e97737] rounded-lg p-4 mb-6">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-6 h-6 rounded-full bg-[#e97737] text-white flex items-center justify-center text-xs font-bold">
            💡
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#e97737]">Note</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[#333333]">
            <li>PAN Card is a mandatory filed for tax-related purposes or if required by the travel authorities.</li>
            <li>
              Ensure that all detail are filled accurately to avoid any discrepancies during the trip registration
              process.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
