import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

export default function DesktopMenu({ pokemon, loading })
{
    return (
        <>
            <div className="hidden lg:block">
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">Abilities</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {!loading && pokemon.abilities.map((ability, abilityIndex) => (
                                        <div key={abilityIndex} className="flex items-center">
                                            <label
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {ability.ability.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">Stats</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {!loading && pokemon.stats.map((stat, statIndex) => (
                                        <div key={statIndex} className="flex items-center">
                                            <label
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {stat.stat.name} : {stat.base_stat}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">Types</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {!loading && pokemon.types.map((type, typeIndex) => (
                                        <div key={typeIndex} className="flex items-center">
                                            <label
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {type.type.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">Moves</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {!loading && pokemon.moves.map((move, moveIndex) => (
                                        <div key={moveIndex} className="flex items-center">
                                            <label
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {move.move.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}