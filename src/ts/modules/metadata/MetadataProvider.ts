import {Provider} from "../Provider";
import {MetadataData} from "../../Interfaces";
import {
	MetadataCache,
	MetadataConfig,
	MetadataModule,
	MetadataProviderCaches, MetadataProviderCacheTypes,
	MetadataProviderConfigs,
	MetadataProviderConfigTypes, MetadataProviderResolverCaches, MetadataProviderResolverConfigs
} from "./MetadataModule";
import {Resolver} from "../Resolver";

export abstract class MetadataProvider<Res extends Resolver<
	   MetadataModule,
	   MetadataProvider<Res>,
	   Res,
	   MetadataConfig,
	   MetadataProviderConfigs,
	   MetadataProviderConfigTypes,
	   MetadataProviderResolverConfigs,
	   MetadataCache,
	   MetadataProviderCaches,
	   MetadataProviderCacheTypes,
	   MetadataProviderResolverCaches,
	   MetadataData
>> extends Provider<
	   MetadataModule,
	   MetadataProvider<Res>,
	   Res,
	   MetadataConfig,
	   MetadataProviderConfigs,
	   MetadataProviderConfigTypes,
	   MetadataProviderResolverConfigs,
	   MetadataCache,
	   MetadataProviderCaches,
	   MetadataProviderCacheTypes,
	   MetadataProviderResolverCaches,
	   MetadataData
>
{
}